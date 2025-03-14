import app from "./app.js";
import { connectDB } from "./db.js";
import cron from 'node-cron';
import { getUsers } from "./controllers/auth.controller.js";
import { sendEmail } from "./emails/nodemailer.js";
import { getTasksEmail } from "./controllers/task.controllers.js";
import { PORT } from "./config.js";

connectDB();

cron.schedule('20 7 * * *',async ()=>{ //all days at seven with ten minuts send email with data of the tasks of each user
  try {
    const userFounds = await getUsers();
    userFounds.map(async (user)=>{
      const taskUser = await getTasksEmail(user);
      if(Object.values(taskUser).some((value) => value!== 0)){
        sendEmail(user,taskUser);
      }
    });
  } catch (error) {
    console.log("error aqui")
    console.log(error)
  }
})

app.listen(PORT);
console.log('The server is live in the port 4000')