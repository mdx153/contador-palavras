module.exports = words => {
    return new Promise((resolver, reject) => {
        try {
            //recebe um array e cria um objeto com nome:quantidade
            const groupedWords = words.reduce((obj, word) => {
                if (obj[word]) { obj[word] += 1 } else { obj[word] = 1 }
                return obj
            }, {})

            const groupedWordsArray = Object
                .keys(groupedWords)
                .map(key => ({ palavra: key, quantidade: groupedWords[key] }))
                .sort((v1, v2) => v2.quantidade - v1.quantidade)

            resolver(groupedWordsArray)
        } catch (e) { reject(e) }

    })
}