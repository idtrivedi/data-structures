public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        // var res = new Dictionary<string, IList<string>>();

        // foreach(string str in strs){
        //     string strKey = String.Concat(str.OrderBy(c => c));

        //     if(res.ContainsKey(strKey)){
        //         res[strKey].Add(str);
        //     } else {
        //         res.Add(strKey, new List<string>() {str});
        //     }
        // }

        if(strs.Length == 0) return new List<IList<string>>();

        Dictionary<string,IList<string>> res = new Dictionary<string, IList<string>>();
        int[] count = new int[26];

        foreach(string s in strs){
            for(int i = 0; i < 26; i++){
                count[i] = 0;
            }

            foreach(char c in s){
                count[c - 'a']++;
            }
            StringBuilder sb = new StringBuilder();
            for(int i = 0; i < 26; i++){
                sb.Append("#");
                sb.Append(count[i]);
            }

            string key = sb.ToString();
            if(!res.ContainsKey(key)){
                res[key] = new List<string>();
            }
            res[key].Add(s);
        }        

        return res.Values.ToList().ToList();
    }
}
