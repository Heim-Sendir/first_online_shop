import * as bcrypt from 'bcrypt';


//Хэшируем пароль перез сохранением на сервере
export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    console.log('Возврашаем хэш 1: ', hashed);
    return hashed;
}


//Сравниваем пароли между собой при помощи встроенной функции compare
export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Совпадение паролей: ', isMatch);
    return isMatch;

}