# "Node JS Starter Code for JUMP-START"

**Description:**

**Using Sequelize**
to be exact **sequelize-cli** its nice as it creates **migrations and models** automatically
**but hectic** let me explain. It requires on to write the whole migration thingy in the cli

npx sequelize-cli model:generate --name User --attributes firstName:string,lastname:string,email:string,username:string,password:string,refreshToken:string,role:enum:{5045,2097,1352},status:boolean --underscored

this create users model with all the fields and enums as well.

npx sequelize-cli model:generate --name Task --attributes title:string,userId:integer

**associative fields** like foreign key fields need to be called here too. Yeah we need to reflect changes on models and migrations as well.

**Incremental Migration** possible with a but. Might need to write raw query.

**But it is what it is**
