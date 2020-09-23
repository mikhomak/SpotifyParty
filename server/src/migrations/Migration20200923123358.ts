import { Migration } from '@mikro-orm/migrations';

export class Migration20200923123358 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "party_model" add column "current_users_amount" int4 not null;');
    this.addSql('create index "party_model_current_users_amount_index" on "party_model" ("current_users_amount");');
  }

}
