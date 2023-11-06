import adminSeeder from "./adminSeeder";

const runSeeder = async () => {
    await adminSeeder();
}

runSeeder().then(() => {
    console.log('Run seeder finished');
}).catch((error) => {
    console.log(error)
});