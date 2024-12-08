#include<bits/stdc++.h>



using namespace std;



bool ok(char x) { // checks is some char x is an english lowercase alphabet
	return x >= 97 && x < 97 + 26;
}

bool isPalindrome(string str) { // checks if given string is a palindorme ignoring non lowercase english alphabet using a two pointer approach
	int n = (int)str.size();
	int l = 0, r = n - 1;
	while (l < r) {
		while (l < r && !ok(tolower(str[l]))) l++;
		while (l < r && !ok(tolower(str[r]))) r--;
		if (tolower(str[l]) != tolower(str[r])) {
			return false;
		}
		l++, r--;
	}
	return true ;

}


int main() {
	//cout << (char)(97 + 26 - 1);

	cout << (isPalindrome("Madam, in Eden, I'm Adam") ? "true" : "flase") << endl;
	cout << (isPalindrome("Complete the project report") ? "true" : "false") << endl;
	cout << (isPalindrome("?  ! , ;") ? "true" : "false") << endl; // since punctuation is ignored this case will should return true
	cout << (isPalindrome("a  ?  !;,") ? "true" : "false") << endl;
	cout << (isPalindrome("ax  ?  !;,") ? "true" : "false") << endl;









	return 0;
}