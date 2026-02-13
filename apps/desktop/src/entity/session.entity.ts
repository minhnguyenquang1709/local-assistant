import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TableName } from "shared-types";

@Entity(TableName.Session)
export class Session {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;
}
