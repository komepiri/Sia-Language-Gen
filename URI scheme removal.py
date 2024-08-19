def remove_after_keyword(line, keyword):
    if keyword in line:
        index = line.index(keyword)
        line = line[:index] + "\n"  # 改行文字を残す
    return line

def main():
    file_path = "1.txt"  # ファイルパスを指定してください
    keywords = ["http://", "https://"]  # 削除するキーワードを指定してください

    with open(file_path, "r") as file:
        lines = file.readlines()

    modified_lines = lines.copy()
    for keyword in keywords:
        modified_lines = [remove_after_keyword(line, keyword) for line in modified_lines]

    with open(file_path, "w") as file:
        file.writelines(modified_lines)

if __name__ == "__main__":
    main()
