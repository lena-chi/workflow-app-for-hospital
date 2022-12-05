export default function deleteVisit(){
    const token = localStorage.getItem('token')
    fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.status)

        //response response.json()

        .then(data => {
            if('200'){
                console.log(this.card)

                const dataLocalStorage = JSON.parse(localStorage.getItem('data'))
                const delObj = dataLocalStorage.find(({id})=>id === this.id)
                const indexDelObj = dataLocalStorage.indexOf(delObj)
                dataLocalStorage.splice(indexDelObj, 1);

                localStorage.setItem('data', JSON.stringify(dataLocalStorage))
                this.cardCol.remove()
            }
        })

}