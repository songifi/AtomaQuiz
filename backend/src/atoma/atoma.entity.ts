import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('atoma')
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string; // Unique identifier for the user

  @Column({ unique: true })
  userID: string; // The username for the player

  @Column({ unique: true })
  chatID: string; // The chat ID for the session

  @CreateDateColumn()
  createdAt: Date; // Timestamp for when the account was created

  @UpdateDateColumn()
  updatedAt: Date; // Timestamp for the last account update
}
