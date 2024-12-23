const fruits = [
    {
        fruitId: 10,
        fruitName: 'Anggur',
        fruitType: 'INTERNASIONAL',
        stock: 10
    },
    {
        fruitId: 1,
        fruitName: 'Jambu',
        fruitType: 'CAMPURAN',
        stock: 10
    },
    {
        fruitId: 1,
        fruitName: 'Melon',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
];

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
}

// function extractFruitNames(fruits) {
//     const fruitsName = fruits.map(fruit => toTitleCase(fruit.fruitName));
//     let uniqueFruits = [...new Set(fruitsName)];
//     return uniqueFruits;
// };

function extractFruitNames(fruits) {
    const fruitsName = fruits.map(fruit => toTitleCase(fruit.fruitName));
    const uniqueFruits = [];
    fruitsName.forEach(item => {
        if (!uniqueFruits.includes(item)) {
            uniqueFruits.push(item)
        }
    });
    return uniqueFruits;
};

console.log("\n1. Buah apa saja yang dimiliki Andi?");
console.log(extractFruitNames(fruits), "\n");

function groupFruitsByType(fruits) {
    return fruits.reduce((grouped, fruit) => {
        grouped[fruit.fruitType] = grouped[fruit.fruitType] || [];
        grouped[fruit.fruitType].push(fruit.fruitName);
        return grouped;
    }, {});
};

function countFruitsTypes(fruits) {
    const fruitsType = fruits.map(fruit => fruit.fruitType);
    const uniqueFruits = [...new Set(fruitsType)];
    return uniqueFruits.length;
};

const groupedFruits = groupFruitsByType(fruits);

console.log("2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?");
console.log("Jumlah wadah yang dibutuhkan:", countFruitsTypes(fruits));
console.log("IMPORT:", groupedFruits.IMPORT || []);
console.log("LOCAL:", groupedFruits.LOCAL || [], "\n");
console.log("semua : ", groupedFruits);

function groupFruitsByTypeAndCountStock(fruits) {
    return fruits.reduce((grouped, fruit) => {
        grouped[fruit.fruitType] = grouped[fruit.fruitType] || {
            stock: 0
        };
        grouped[fruit.fruitType].stock += fruit.stock;
        return grouped;
    }, {});
}

const groupedFruitsWithStock = groupFruitsByTypeAndCountStock(fruits);

console.log("3. Berapa total stock buah yang ada di masing-masing wadah?")
console.log("IMPORT:", groupedFruitsWithStock.IMPORT.stock);
console.log("IMPORT:", groupedFruitsWithStock.LOCAL.stock, "\n");

console.log("4. Apakah ada komentar terkait kasus di atas?");
console.log("Array of object yang ada pada soal cukup membingungkan dengan kejanggalan berikut:");
console.log("1. Terdapat duplikat pada Id fruit");
console.log("2. Terdapat fruitName yang sama hanya berbeda cara penulisannya saja");
console.log("*Notes: pengerjaan ini menganggap berbeda cara penulisan fruitName merupakan buah yang berbeda mengikuti \n nomor soal nomor 3 yang harus menjumlahkan total stock buah berdasarkan fruitType \n")