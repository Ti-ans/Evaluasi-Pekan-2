// Diketahui sebuah data user seperti berikut ini : 
const user = [
    {
        id: 1,
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        hoby: 'coding'
    },
    {
        id: 2,
        username: 'ExKoi',
        email: 'exkoi01@gmail.com',
        hoby: 'gaming'
    }
]

// 1. Buatlah function expression yang bertugas untuk menambahkan data diatas

// code here

const addUser = function(usersArray, newUser) {
    usersArray.push(newUser);
    return usersArray;
};
const newUser = {
    id: 3,
    username: 'Saipul',
    email: 'saipul@gmail.com',
    hoby: 'running'
};
const updatedUsers = addUser(user, newUser);
console.log(updatedUsers);

// example result : 
// [
//     {
//         id: 1,
//         username: 'JohnDoe',
//         email: 'johndoe@gmail.com',
//         hoby: 'coding'
//     },
//     {
//         id: 2,
//         username: 'ExKoi',
//         email: 'exkoi01@gmail.com',
//         hoby: 'gaming'
//     },
//     {
//         id: 3,
//         username: 'test',
//         email: 'test@gmail.com',
//         hoby: 'reading'
//     }
// ]




// 2. Tambahkan properti role dengan value 'user' pada objek dari data array diatas
// clue: Gunakanlah method map()

// code here

const usersWithRole = updatedUsers.map(user => {
    user.role = 'user';
    return user;
});

// example result : 
// [
//     {
//       id: 1,
//       username: 'JohnDoe',
//       email: 'johndoe@gmail.com',
//       hoby: 'coding',
//       role: 'user'
//     },
//     {
//       id: 2,
//       username: 'ExKoi',
//       email: 'exkoi01@gmail.com',
//       hoby: 'gaming',
//       role: 'user'
//     }
//   ]




// 3, Diketahui sebuah segitiga memiliku alas 4 dan tinggi 3, buatlah function yang bertugas untuk menghitung luas segitiga
// note Rumus Luas Segetiga = 1/2 X alas X tinggi atau (alas X tinggi) / 2


function hitungLuasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}
const alas = 4;
const tinggi = 3;
const luas = hitungLuasSegitiga(alas, tinggi);
console.log("luas segitiga =", luas);


// 4. Tukar nilai data dari variabel yang tersedia
function test() {
    let a = 1
    let b = 2

    console.log('a awal = ', a);
    console.log('b awal = ', b);

    // code here

        [a, b] = [b, a];
    
    console.log('a final = ', a);
    console.log('b final = ', b);
}

test()

// expetation result : 
// 'a awal = ', 1
// 'b awal = ', 2

// 'a final = ', 2
// 'b final = ', 1

// 5. Buatlah fungsi untuk melakukan pengecekan terhadap sebuah string bernilai palindrome atau tidak.
// note: Palindrome adalah kata, frasa, angka, atau urutan karakter yang dapat dibaca sama dari depan maupun belakang. Contoh yang paling sederhana adalah kata "malam" atau "level"

// code here

function isPalindrome(str) {
    const reversedStr = str.toLowerCase().split('').reverse().join('');
    return str.toLowerCase() === reversedStr;
}
console.log(isPalindrome("malam")); 
console.log(isPalindrome("level")); 
console.log(isPalindrome("Hello")); 



// example result : true jika palindrome | false jika tidak palindrome