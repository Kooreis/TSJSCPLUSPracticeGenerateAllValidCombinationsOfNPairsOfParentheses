```cpp
#include <iostream>
#include <vector>
#include <string>

void generateParenthesisUtil(int left, int right, std::string str, std::vector<std::string>& result) {
    if (left == 0 && right == 0) {
        result.push_back(str);
        return;
    }
    if (left > 0) {
        generateParenthesisUtil(left - 1, right, str + "(", result);
    }
    if (right > left) {
        generateParenthesisUtil(left, right - 1, str + ")", result);
    }
}

std::vector<std::string> generateParenthesis(int n) {
    std::vector<std::string> result;
    generateParenthesisUtil(n, n, "", result);
    return result;
}

int main() {
    int n;
    std::cout << "Enter the number of pairs of parentheses: ";
    std::cin >> n;
    std::vector<std::string> result = generateParenthesis(n);
    for (const std::string& str : result) {
        std::cout << str << std::endl;
    }
    return 0;
}
```