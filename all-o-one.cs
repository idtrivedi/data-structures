using System;
using System.Collections.Generic;

public class Node
{
    public int Freq;
    public Node Prev;
    public Node Next;
    public HashSet<string> Keys = new HashSet<string>();

    public Node(int freq)
    {
        Freq = freq;
    }
}

public class AllOne
{
    private Node head;
    private Node tail;
    private Dictionary<string, Node> map = new Dictionary<string, Node>();

    public AllOne()
    {
        head = new Node(0);
        tail = new Node(0);
        head.Next = tail;
        tail.Prev = head;
    }

    public void Inc(string key)
    {
        if (map.ContainsKey(key))
        {
            Node node = map[key];
            int freq = node.Freq;
            node.Keys.Remove(key);

            Node nextNode = node.Next;
            if (nextNode == tail || nextNode.Freq != freq + 1)
            {
                Node newNode = new Node(freq + 1);
                newNode.Keys.Add(key);
                newNode.Prev = node;
                newNode.Next = nextNode;
                node.Next = newNode;
                nextNode.Prev = newNode;
                map[key] = newNode;
            }
            else
            {
                nextNode.Keys.Add(key);
                map[key] = nextNode;
            }

            if (node.Keys.Count == 0)
            {
                RemoveNode(node);
            }
        }
        else
        {
            Node firstNode = head.Next;
            if (firstNode == tail || firstNode.Freq > 1)
            {
                Node newNode = new Node(1);
                newNode.Keys.Add(key);
                newNode.Prev = head;
                newNode.Next = firstNode;
                head.Next = newNode;
                firstNode.Prev = newNode;
                map[key] = newNode;
            }
            else
            {
                firstNode.Keys.Add(key);
                map[key] = firstNode;
            }
        }
    }

    public void Dec(string key)
    {
        if (!map.ContainsKey(key))
        {
            return;
        }

        Node node = map[key];
        node.Keys.Remove(key);
        int freq = node.Freq;

        if (freq == 1)
        {
            map.Remove(key);
        }
        else
        {
            Node prevNode = node.Prev;
            if (prevNode == head || prevNode.Freq != freq - 1)
            {
                Node newNode = new Node(freq - 1);
                newNode.Keys.Add(key);
                newNode.Prev = prevNode;
                newNode.Next = node;
                prevNode.Next = newNode;
                node.Prev = newNode;
                map[key] = newNode;
            }
            else
            {
                prevNode.Keys.Add(key);
                map[key] = prevNode;
            }
        }

        if (node.Keys.Count == 0)
        {
            RemoveNode(node);
        }
    }

    public string GetMaxKey()
    {
        if (tail.Prev == head)
        {
            return string.Empty;
        }
        return tail.Prev.Keys.GetEnumerator().Current;
    }

    public string GetMinKey()
    {
        if (head.Next == tail)
        {
            return string.Empty;
        }
        return head.Next.Keys.GetEnumerator().Current;
    }

    private void RemoveNode(Node node)
    {
        Node prevNode = node.Prev;
        Node nextNode = node.Next;

        prevNode.Next = nextNode;
        nextNode.Prev = prevNode;
    }
}
