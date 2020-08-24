import { Migration } from '@mikro-orm/migrations';

export class Migration20200824153227 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "party_model" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');
  }

}
