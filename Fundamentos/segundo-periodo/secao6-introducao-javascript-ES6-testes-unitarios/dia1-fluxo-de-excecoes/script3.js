const checkParameter = () => {
    try {
       console.log(studentRegister('Pamela', 18));
    } catch (erro) {
        console.log(erro.message);
    }
}

const studentRegister = (name, age) => {
    if (age >= 18) {
        return `${name}, seja bem-vindo(a) à AuTrybe!`
    } 
    if (age < 18) {
        return "Ops, infelizmente nesse momento você não pode fazer as aulas"
    } 
    if (!name || !age) {
        throw new Error('Todas as informações são necessárias');
    } return;
}
checkParameter();
