import MeCab

input = open('./data.txt', 'r', encoding='utf-8') # 元となるツイートのデータ
output = open('./splitted.txt', 'w', encoding='utf-8') # ツイートを分かち書きしたもの

mecab = MeCab.Tagger("-Owakati")

for line in input.read().split('\n'):
	splittedLine = ' '.join(mecab.parse(line).split())
	output.write(splittedLine)
	output.write('\n')

input.close()
output.close()
