#include <iostream>
#include <vector>
#include <queue>
#include <cmath>
#include <limits.h>
#include <algorithm>

//https://t.me/the_programmer_only_has_a_path/509

using namespace std;

class Trie {
private:
	Trie* node[26] = { nullptr };
	bool isEnd = false;
	vector<pair<int, int>> coords;

public:
	Trie() {}

	int getCoordsSize() {
		return coords.size();
	}
     
	bool isNext(int i) {
		return node[i];
	}

	Trie * iterate(Trie* p, int ind) {
		if(p->node[ind])
		return p->node[ind];
		else {
			return nullptr;
		}
	}

	pair<int, int> getCoords(int ind) {
		return coords[ind];
	}

	void insert(string word) {
		Trie* p = this;
		for (auto w : word) {
			if (p->node[w - 'a'] == nullptr) {
				p->node[w - 'a'] = new Trie();
			}
			p = p->node[w - 'a'];
		}
		p->isEnd = true;
	}

	void insert(string word, Trie* p, int x, int y) {
		Trie* cur = p;

		for (int i = y; i < (int)word.size(); i++) {
			char w = word[i];
			if (cur->node[w - 'a'] != nullptr) {
				cur->coords.push_back({ x, i });
			}
		}

		for (int i = 0; i < 26; i++) {
			if(cur->node[i] != nullptr)
			insert(word, cur->node[i], x, 0);
		}
	}
};


int main() {

	vector<string> vec = { "rubbishes","polypaged","exanimate","panchion","wolfhound","fetiparous","tracer","perinea","insolubilization","geckotian","teamwork","murkily", };
	string target = "lylubinearubbpage";

	Trie* t = new Trie();

	t->insert(target);
	
	for (int i = 0; i < (int)vec.size(); i++) {
		t->insert(vec[i], t, i, 0);
	}


	//Len = total length of current word
	//prefixLen = len of current subword
	//coords = storing coordinates
	struct node {
		int len;
		int prefixLen;
		vector<short> visited;
		vector<pair<int, int>> coords;
	};
	queue<node> q;
	int n = t->getCoordsSize();


	for (int i = 0; i < n; i++) {
		node nod;
		nod.coords = { t->getCoords(i) };
		nod.visited.resize(vec.size()); nod.visited[nod.coords[0].first] = 1;
		nod.len = nod.prefixLen = 1;
		q.push(nod);
	}

	for (int k = 0; k < 26; k++) {
		if (t->isNext(k)) {
			t = t->iterate(t, k);
			break;
		}
	}
	
	vector<vector<pair<int, int>>> ranges;
	while (!q.empty()) {
		int size = q.size();

		for (int i = 0; i < size; i++) {
			auto cur = q.front(); q.pop();
			if (cur.len == target.size()) {
				ranges.push_back(cur.coords);
			}
			n = t->getCoordsSize();

			for (int j = 0; j < n; j++) {
				auto next = t->getCoords(j);

				if (cur.coords.back().first == next.first && cur.coords.back().second+1 == next.second) {
					cur.coords.push_back(next);
					cur.visited[next.first] = 1;
					q.push({ cur.len + 1, cur.prefixLen+1,cur.visited, cur.coords});

					cur.coords.pop_back();
				}
				//Checking if we can use next word
				else if (cur.coords.back().first != next.first && cur.prefixLen > 1 && cur.len != target.size()-1 && cur.visited[next.first] == 0) {
					cur.coords.push_back(next);
					cur.visited[next.first] = 1;
					q.push({ cur.len + 1, 1,cur.visited, cur.coords });

					cur.visited[next.first] = 0;
					cur.coords.pop_back();
				}

			}
			
		}

		for (int k = 0; k < 26; k++) {
			if (t->isNext(k)) {
				t = t->iterate(t, k);
				break;
			}
		}
	}


	//first word that occured in vec,  
	//second.first -> index of word in vector
	//second.second.first -> start index, second.second.second -> end index
	vector <pair<int, vector<pair<int,pair<int, int>>>>> ans;
	for (auto r : ranges) {
		int mmin = INT_MAX;
		vector<pair<int, pair<int, int>>> temp;

		int f = r[0].second;
		int curWord = r[0].first;
		for (int i = 1; i < r.size() - 1; i++) {
			//cout << vec[r[i].first][r[i].second];
			if (curWord != r[i].first) {
				mmin = min(mmin, r[i].first);
				temp.push_back({ curWord,{ f, r[i - 1].second } });
				curWord = r[i].first;
				f = r[i].second;
			}
		}
		temp.push_back({ curWord,{ f, r[r.size() - 1].second } });
		ans.push_back({ mmin,temp });
	}
	//Answer is first element of ans

	if (ranges.size() > 0) {
		sort(ans.begin(), ans.end(), [](pair<int, vector<pair<int, pair<int, int>>>> & a, pair<int, vector<pair<int, pair<int, int>>>> & b) {
			if(a.second.size() != b.second.size())
				return a.second.size() < b.second.size();
			else {
				return a.first < b.first;
			}
			});


		for (int i = 0; i < ans[0].second.size(); i++) {
			int ind = ans[0].second[i].first;
			int l = ans[0].second[i].second.first;
			int f = ans[0].second[i].second.second;

			cout << "Word position in vector is " << ind << "\n";
			cout << "left -> " << l << " " << "right -> " << f << "\n";

		}
	}

	return 0;
}



