import { Column, Entity, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;
  
  @Column()
  fullname:string;

  @Column()
  email:string;

  @Column()
  adress:string;

  @CreateDateColumn({type:"datetime"})
  createdAt:Date;

  @UpdateDateColumn()
  updatedAt:Date;
}