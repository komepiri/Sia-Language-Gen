# 入力ファイル名
input_filename = "nyahutalk.txt"
# 出力ファイル名
output_filename = "1.txt"

# 抽出条件の文字列
target_strings = ["Sia", "sia", "シア", "色即是空", "慈空亜邪利", "メンヘイ", "テイルズ"]

# 入力ファイルを読み込み、条件に一致する行を抽出して出力ファイルに保存する関数
def extract_lines(input_filename, output_filename, target_strings):
    with open(input_filename, "r", encoding="utf-8") as input_file:
        with open(output_filename, "w", encoding="utf-8") as output_file:
            for line in input_file:
                # 行を/で分割し、2番目の要素以降を取得
                parts = line.split("/")
                if len(parts) > 1:
                    after_slash = parts[1].strip()
                    # 条件に一致する文字列が含まれているかチェック
                    for target_string in target_strings:
                        if target_string in after_slash:
                            # 条件に一致した行を出力ファイルに書き込む
                            output_file.write(line)
                            break

# 関数を呼び出して処理を実行
extract_lines(input_filename, output_filename, target_strings)
