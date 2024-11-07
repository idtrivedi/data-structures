import java.util.*;


class File {
int size;


File(int size) {
    this.size = size;
}

public int getSize(){
    return this.size;
}
}


class Collection {


public String name;
public int totalSize;
private List<File> files;

Collection(String n) {
    this.name = n;
    this.totalSize = 0;
    files = new ArrayList<>();
}

public void addFile(File file){
    files.add(file);
    this.totalSize = this.totalSize + file.getSize();     
}
}


public class FileUtility {


public int totalSizeProcessed = 0;

public HashMap<String,Collection> map = new HashMap<>();
public PriorityQueue<Collection> queue = new PriorityQueue<Collection>((a,b)->{
    return b.totalSize - a.totalSize;
});

public void getTotalSize() {
    System.out.println("Total size of files processed: "+totalSizeProcessed);
}
public void getTop(int N) {
    
    List<String> topN = new ArrayList<>();
    List<Collection> list = new ArrayList<>();
    System.out.println("Top "+N+" Collections:");
    
    while(N>0 && queue.size()>0) {
        Collection poll = queue.poll();
        if(!poll.name.equalsIgnoreCase("root")) {
            System.out.println("- "+poll.name+" "+poll.totalSize);
            N--;
        }
        list.add(poll);
    }
    
    queue.addAll(list);
    
}


public void saveFiletoCollection(String collectionName,int fileSize) {
    if(Objects.isNull(collectionName)) collectionName = "root";
    
    if(map.containsKey(collectionName)) {

        Collection collection = map.get(collectionName);
        queue.remove(collection);
        totalSizeProcessed = totalSizeProcessed + fileSize;
        collection.addFile(new File(fileSize));
        queue.add(collection);
        map.put(collectionName,collection);

    } else {
        Collection collection = new Collection(collectionName);
        collection.addFile(new File(fileSize));
        totalSizeProcessed = totalSizeProcessed + fileSize;
        queue.add(collection);
        map.put(collectionName,collection);

    }    
}


public static void main(String[] args) {
    
    FileUtility  utility = new FileUtility();
    utility.saveFiletoCollection("collection1",200);
    utility.saveFiletoCollection("collection2",200);
    utility.saveFiletoCollection(null,200);
    
    utility.saveFiletoCollection("collection3",200);
    utility.saveFiletoCollection("collection3",200);
    utility.saveFiletoCollection("collection3",200);
    utility.saveFiletoCollection("collection2",100);
    utility.getTotalSize();
    utility.getTop(3);

}
}
