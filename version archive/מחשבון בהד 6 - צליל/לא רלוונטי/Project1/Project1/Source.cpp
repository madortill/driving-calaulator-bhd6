#include <iostream>
#include <string>
#include <ctime>

using namespace std;

int main()
{
	srand(time(NULL));
	string arr[10] = {"Tzlil", "Noa", "Libby", "Daniel", "����", "Peleg", "Rony", "stav", "�����", "Dana"};
	unsigned int random = rand() % 10;
	cout << arr[random] << endl;
	system("pause");
	return 0;
}