---
sidebar_position: 1
---

# JASS 数据类型对照表

### Java/TypeScript/C#

|    Java 数据类型     |        C# 数据类型         |  TypeScript 数据类型   |
| :------------------: | :------------------------: | :--------------------: |
|        `int`         |           `int`            |        `number`        |
|        `long`        |           `long`           | `number`(with BigInt)  |
|       `float`        |          `float`           |        `number`        |
|       `double`       |          `double`          |        `number`        |
|      `boolean`       |           `bool`           |       `boolean`        |
|        `char`        |           `char`           | `string` (single-char) |
|       `String`       |          `string`          |        `string`        |
|      `List<T>`       |         `List<T>`          |       `Array<T>`       |
|     `Map<K, V>`      |     `Dictionary<K, V>`     |     `Record<K, V>`     |
|       `Set<T>`       |        `HashSet<T>`        |        `Set<T>`        |
|       `Tuple`        |       `Tuple types`        |     `Tuple types`      |
|        `enum`        |           `Enum`           |         `Enum`         |
|       `Object`       |          `object`          |         `any`          |
|        `void`        |           `void`           |         `void`         |
| `null` / `undefined` |    `null` / `undefined`    |  `null` / `undefined`  |
| `java.sql.Timestamp` | `java.time.LocalDateTime ` |       `DateTime`       |
|                      |                            |                        |

### Java Compare table with data type

|           Java            |   MySQL    |          PostgreSQL           |       Oracle        | SQL Server  |  InfluxDB  |
| :-----------------------: | :--------: | :---------------------------: | :-----------------: | :---------: | :--------: |
|    `java.lang.Boolean`    | `BOOLEAN`  |           `BOOLEAN`           |     `NUMBER(1)`     |    `BIT`    | `BOOLEAN`  |
|     `java.lang.Byte`      | `TINYINT`  |          `SMALLINT`           |     `NUMBER(3)`     |  `TINYINT`  |            |
|     `java.lang.Short`     | `SMALLINT` |          `SMALLINT`           |     `NUMBER(5)`     | `SMALLINT`  |            |
|      `java.lang.Int`      |   `INT`    |           `INTEGER`           |    `NUMBER(10)`     |    `INT`    |            |
|     `java.lang.Long`      |  `BIGINT`  |           `BIGINT`            |    `NUMBER(19)`     |  `BIGINT`   |   `INT`    |
|     `java.lang.Float`     |  `FLOAT`   |            `REAL`             | `NUMBER`(带小数点)  |   `REAL`    |            |
|    `java.lang.Double`     |  `DOUBLE`  |      `DOUBLE PRECISION`       | `NUMBER`(带小数点)  |   `FLOAT`   |   `REAL`   |
|    `java.lang.String`     | `VARCHAR`  |            `TEXT`             | `VARCHAR` 或 `TEXT` | `VARCHAR2`  |   `CLOB`   |
|  `java.math.BigDecimal`   | `DECIMAL`  |           `NUMERIC`           |      `NUMERIC`      |  `NUMBER`   | `DECIMAL`  |
|      `java.sql.Date`      |   `DATE`   |            `DATE`             |       `DATE`        |   `DATE`    |            |
|      `java.sql.Time`      |   `TIME`   |            `TIME`             | `DATE`(仅时间部分)  |   `TIME`    |            |
|   `java.sql.Timestamp`    | `DATETIME` |          `TIMESTAMP`          |     `TIMESTAMP`     | `TIMESTAMP` | `DATETIME` |
|     `java.sql.Array`      |  `ARRAY`   |            `ARRAY`            |       `TABLE`       |   `TABLE`   |            |
|      `java.sql.Blob`      |   `BLOB`   |            `BYTEA`            |       `BLOB`        | `VARBINARY` |            |
|      `java.sql.Clob`      |   `CLOB`   |            `TEXT`             |       `CLOB`        |   `TEXT`    |            |
|    `java.time.Instant`    |            |                               |                     |             |   `TIME`   |
| `java.time.LocalDateTime` |            | `timestamp without time zone` |                     |             |            |

### C# Compare table with data type

|              C#              |              MySQL              |          PostgreSQL           |        Oracle        |     SQL Server     |   InfluxDB   |
| :--------------------------: | :-----------------------------: | :---------------------------: | :------------------: | :----------------: | :----------: |
|            `bool`            |             `BOOL`              |         `TINYINT(1)`          |      `BOOLEAN`       |    `NUMBER(1)`     |    `BIT`     |
|            `byte`            |       `TINYINT UNSIGNED`        |          `SMALLINT`           |     `NUMBER(3)`      |     `TINYINT`      |              |
|           `short`            |           `SMALLINT`            |          `SMALLINT`           |     `NUMBER(5)`      |     `SMALLINT`     |              |
|            `int`             |              `INT`              |           `INTEGER`           |     `NUMBER(10)`     |       `INT`        | `INT` `TIME` |
|            `long`            |            `BIGINT`             |           `BIGINT`            |     `NUMBER(19)`     |      `BIGINT`      |              |
|           `float`            |             `FLOAT`             |            `REAL`             | `NUMBER`（带小数点） |       `REAL`       |   `FLOAT`    |
|           `double`           |            `DOUBLE`             |      `DOUBLE PRECISION`       | `NUMBER`（带小数点） |      `FLOAT`       |    `REAL`    |
|          `decimal`           |            `DECIMAL`            |           `NUMERIC`           |      `NUMERIC`       |      `NUMBER`      |  `DECIMAL`   |
|           `string`           |            `VARCHAR`            |            `TEXT`             |      `VARCHAR`       |       `TEXT`       |  `VARCHAR2`  |
|            `char`            |             `CHAR`              |            `CHAR`             |     `VARCHAR(1)`     |       `CHAR`       |    `CHAR`    |
|          `DateTime`          |           `DATETIME`            |          `TIMESTAMP`          |     `TIMESTAMP`      |       `DATE`       | `TIMESTAMP`  |
|           `byte[]`           |             `BLOB`              |            `BYTEA`            |        `BLOB`        |    `VARBINARY`     |              |
|            `Guid`            |           `CHAR(36)`            |            `UUID`             |      `RAW(16)`       | `UNIQUEIDENTIFIER` |              |
|            `Enum`            |             `ENUM`              |    `ENUM`(PostgreSQL 8.3+)    |      `VARCHAR2`      |      `NUMBER`      |    `INT`     |
|    `System.Net.IPAddress`    |         `VARBINARY(16)`         |   `INET`(PostgreSQL 9.4+）    |       `RAW(4)`       |  `VARBINARY(16)`   |              |
| `System.Net.IPAddressRange`  |                -                |   `CIDR`（PostgreSQL 9.4+）   |          -           |         -          |              |
| `System.Numerics.BigInteger` |            `DECIMAL`            |           `NUMERIC`           |      `NUMERIC`       |      `NUMBER`      |  `DECIMAL`   |
|            `json`            | `System.Text.Json.JsonDocument` |            `JSON`             |       `JSONB`        |       `JSON`       |   `JSONB`    |
|          `DateTime`          |                                 | `TIMESTAMP WITHOUT TIME ZONE` |                      |                    |              |

