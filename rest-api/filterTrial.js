let books =[{
    id:1,
    title:"Book 1"
},
{
    id:2,
    title:"Book 2"
},
{
    id:3,
    title :"Book 3 "
},
{
    id:6,
    title :"Book 6"
}
]
const result = books.map(book => book.id)
console.log(result)

const filter = books.filter(book => book.id>1)

console.log(filter)