// import uuid from 'uuid';
import { v1 as uuidv1 } from 'uuid';
import md5 from 'md5';
import { connectDB } from './connect-db';

const authenticationToken = [];

async function assembleUserState(user){
  console.log("assembleUserState: STARTED");
  let db = await connectDB();
  let tasks = await db.collection(`tasks`).find({owner:user.id}).toArray();
  let groups = await db.collection(`groups`).find({owner:user.id}).toArray();
  return { tasks, groups, session: { authenticated: `AUTHENTICATED`, id:user.id }}
}

export const authenticationRoute = app => {
  console.log("authenticationRoute: STARTED");
  app.post('/authenticate', async (req,res)=> {
    let { username, password } = req.body;
    let db = await connectDB();
    let collection = db.collection(`users`);
    let user = await collection.findOne({name:username});
    let hash = md5(password);
    let passwordCorrect = hash === user.passwordHash;
    let token = uuidv1();
    let state = await assembleUserState(user);

    if(!user) { return res.status(500).send("User not found"); }
    if(!passwordCorrect) { return res.status(500).send("Password incorrect"); }
    authenticationToken.push({token, userID:user.id });
    res.send({token, state});
  });
};
