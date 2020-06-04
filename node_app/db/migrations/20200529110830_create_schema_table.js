exports.up = function (knex) {
  return knex.schema.createTable("schemas", (schemaTable) => {
    schemaTable.increments("schema_id").primary();
    schemaTable.string("name");
    schemaTable.string("type").defaultTo("object");
    schemaTable.string("field_1");
    schemaTable.string("field_1_type");
    schemaTable.string("field_2");
    schemaTable.string("field_2_type");
    schemaTable.string("field_3");
    schemaTable.string("field_3_type");
    schemaTable.string("field_4");
    schemaTable.string("field_4_type");
    schemaTable.string("field_5");
    schemaTable.string("field_5_type");
    schemaTable.text("question_1").notNullable();
    schemaTable.text("question_1_type");
    schemaTable.json("question_1_options");
    schemaTable.text("question_2");
    schemaTable.text("question_2_type");
    schemaTable.json("question_2_options");
    schemaTable.text("question_3");
    schemaTable.text("question_3_type");
    schemaTable.json("question_3_options");
    schemaTable.text("question_4");
    schemaTable.text("question_4_type");
    schemaTable.json("question_4_options");
    schemaTable.text("question_5");
    schemaTable.text("question_5_type");
    schemaTable.json("question_5_options");
    schemaTable.bool("pre-check_complete").defaultTo(false);
    schemaTable.bool("post-check_complete").defaultTo(false);
    schemaTable.string("created_by").defaultTo("admin");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("schemas");
};
