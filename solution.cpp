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