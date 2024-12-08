
#include <bits/stdc++.h>
#include "./TaskCategorie.cpp"
using namespace std;


class Task {
private :
	std::vector<TaskCategorie> categorieList;
	int taksId ;
	int priority ;
	string title ;
	string description;
	string due_data;
public:
	Task() {} // consturctor
	void addCategorie(TaskCategorie t) {
		categorieList.emplace_back(t);
	}

	vector<TaskCategorie> listallAvailblecat() {
		return categorieList;
	}






};


