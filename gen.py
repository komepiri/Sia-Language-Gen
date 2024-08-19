import markovify

input = open('./splitted.txt', 'r', encoding='utf-8')
model = markovify.NewlineText(input.read())
sentence = model.make_sentence()

# 文章は分かち書きで出力されるのでスペースをトリミング
print(sentence.replace(" ",""))

input.close()
