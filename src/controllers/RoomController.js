const Database = require("../db/config")

module.exports = {
        async create(req, res){
            const db = await Database()
            const pass = req.body.password
            let isRoom = true

        while (isRoom) {
            // Gera o numero da sala 
            for(var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString()
            }

            // Verificar se esse numero já existe
            const roomExistIds =  await db.all(`SELECT id FROM rooms`)

            isRoom =  roomExistIds.some(roomExistIds => roomExistIds === roomId)

            if(!isRoom) {
                // Inserir a sala no baco 
                    await db.run(`INSERT INTO rooms (
                        id,
                        pass
                    ) VALUES (
                        ${parseInt(roomId)},
                        ${pass}
                    )`)
            }

        }
        await db.close()

        res.redirect(`/room/${roomId}`)
    } ,
    
    async open(req, res) {
        const roomId = req.params.room
        res.render("room", {roomId : roomId})
    }
}