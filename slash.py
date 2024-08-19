def remove_after_slash(file_path):
    # 新しいファイルに書き込むためのリストを用意
    new_lines = []
    
    # ファイルを読み込み
    with open(file_path, 'r') as file:
        lines = file.readlines()
        for line in lines:
            # スラッシュの位置を探し、その前の部分を取り出す
            if '/' in line:
                line = line.split('/')[0]
            new_lines.append(line + '\n')
    
    # ファイルに書き込み
    with open(file_path, 'w') as file:
        file.writelines(new_lines)

# 使用例
file_path = '1.txt'
remove_after_slash(file_path)
