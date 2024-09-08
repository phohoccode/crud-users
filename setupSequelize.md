# 1. Cài đặt Sequelize và MySQL

Trước tiên, bạn cần cài đặt sequelize, sequelize-cli, và trình điều khiển cho cơ sở dữ liệu mà bạn muốn sử dụng (trong trường hợp này là MySQL).

> > > npm install sequelize sequelize-cli mysql2

sequelize: ORM chính để làm việc với cơ sở dữ liệu.
sequelize-cli: Công cụ dòng lệnh để tạo các tệp migration, model, và các tác vụ khác.
mysql2: Trình điều khiển MySQL để kết nối với cơ sở dữ liệu MySQL.

# 2. Khởi tạo Sequelize

> > > npx sequelize-cli init

Lệnh này sẽ tạo ra các thư mục và tệp tin sau trong dự án của bạn:

config/config.json: Tệp cấu hình kết nối cơ sở dữ liệu cho các môi trường khác nhau (development, test, production).
models/: Thư mục chứa các model Sequelize.
migrations/: Thư mục chứa các tệp migration để quản lý các thay đổi trong cấu trúc cơ sở dữ liệu.
seeders/: Thư mục chứa các tệp seed để chèn dữ liệu mẫu vào cơ sở dữ liệu.

# 3. Cấu hình kết nối cơ sở dữ liệu

Mở tệp config/config.json và cấu hình thông tin kết nối cho cơ sở dữ liệu của bạn.

# 4. Tạo một model

Bạn có thể tạo một model mới bằng cách sử dụng sequelize-cli:

> > > npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

Lệnh này sẽ tạo ra:

Một tệp migration trong thư mục migrations/.
Một tệp model trong thư mục models/.

# 5. Chạy migration

Sau khi tạo model, bạn cần chạy migration để tạo bảng tương ứng trong cơ sở dữ liệu:

> > > npx sequelize-cli db:migrate

# 6. Tạo dữ liệu mẫu bằng Seeders

Nếu bạn muốn chèn dữ liệu mẫu vào cơ sở dữ liệu, bạn có thể tạo một seeder:

> > > npx sequelize-cli seed:generate --name demo-user

Sau đó chỉnh sửa tệp seeder trong thư mục seeders/ và chạy lệnh:

> > > npx sequelize-cli db:seed:all
