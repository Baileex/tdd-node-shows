exports.up = function (knex) {
  return knex.schema.createTable("forms", (formTable) => {
    formTable.increments("form_id").primary();
    formTable.string("field_1");
    formTable.string("field_1_answer");
    formTable.string("field_2");
    formTable.string("field_2_answer");
    formTable.string("field_3");
    formTable.string("field_3_answer");
    formTable.string("field_4");
    formTable.string("field_4_answer");
    formTable.string("field_5");
    formTable.string("field_5_answer");
    formTable.text("question_1").notNullable();
    formTable.text("question_1_answer");
    formTable.text("question_2");
    formTable.text("question_2_answer");
    formTable.text("question_3");
    formTable.text("question_3_answer");
    formTable.text("question_4");
    formTable.text("question_4_answer");
    formTable.text("question_5");
    formTable.text("question_5_answer");
    formTable.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("forms");
};
