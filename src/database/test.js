const Database = require('./db')
const createproffy = require('./createProffy')


Database.then(async (db) => {
    // Inserir dados 

    proffyValue = {
        name: "Deangelo Andrade", 
        avatar: "https://avatars2.githubusercontent.com/u/66507854?s=460&u=db73a6467b5345d166cec2e9180a4ffeecc28c10&v=4", 
        whatsapp: "00 0000 0000", 
        bio: "Desenvolvedor web, trabalhando com HTML, CSS, Javascript, NODEJS, SQL", 
    }

    classValue = {
        subject: 1, 
        cost: "20", 
        // o proffy is virá pelo banco de dados 
    }

    classScheduleValues = [
        // class_id virá pelo bando de dados, após cadastrarmos a class
        {
            weekday: 1, 
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createproffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos 

    // todos os proffys
    const selectedProffys = await db.all(" SELECT * FROM proffys")
    //console.log (selectedProffys)

    // consultar as classes de um determinador
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    console.log (selectClassesAndProffys)

    // horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser antes menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)

})