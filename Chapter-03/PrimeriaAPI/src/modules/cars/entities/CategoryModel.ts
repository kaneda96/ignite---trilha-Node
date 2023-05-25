import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
class Category {

  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;
  description: string;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 3
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    precision: 3
  })
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };

