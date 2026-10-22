# Инструкция по установке компонентов на Ubuntu 22.04

Данная инструкция поможет вам установить все необходимые компоненты для работы с проектом на Ubuntu 22.04.

## Обновление системы

Перед началом установки обновите систему:

```bash
sudo apt update && sudo apt upgrade -y
```

## 1. Установка Python3

Python3 обычно уже установлен в Ubuntu 22.04, но установим его и дополнительные пакеты:

```bash
# Установка Python3 и pip
sudo apt install python3 python3-pip python3-venv python3-dev -y

# Проверка версии
python3 --version
pip3 --version
```

### Создание виртуального окружения (рекомендуется)

```bash
# Создание виртуального окружения
python3 -m venv venv

# Активация виртуального окружения
source venv/bin/activate

# Для деактивации (когда закончите работу)
# deactivate
```

## 2. Установка Node.js и PM2

PM2 - это менеджер процессов для Node.js приложений:

```bash
# Установка Node.js через NodeSource репозиторий
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Проверка версии
node --version
npm --version

# Установка PM2 глобально
sudo npm install -g pm2

# Проверка установки PM2
pm2 --version
```

### Настройка автозапуска PM2

```bash
# Настройка автозапуска PM2 при загрузке системы
pm2 startup
# Выполните команду, которую выведет предыдущая команда

# Сохранение текущих процессов
pm2 save
```

## 3. Установка MongoDB

### Метод 1: Установка через официальный репозиторий (рекомендуется)

```bash
# Импорт публичного ключа
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor

# Добавление репозитория MongoDB
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Обновление списка пакетов
sudo apt-get update

# Установка MongoDB
sudo apt-get install -y mongodb-org

# Запуск и включение автозапуска MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Проверка статуса
sudo systemctl status mongod
```

### Метод 2: Установка через snap (альтернатива)

```bash
# Установка MongoDB через snap
sudo snap install mongodb

# Проверка статуса
sudo systemctl status snap.mongodb.mongod
```

### Настройка MongoDB

```bash
# Подключение к MongoDB
mongosh

# В оболочке MongoDB создайте базу данных и пользователя:
# use your_database_name
# db.createUser({
#   user: "your_username",
#   pwd: "your_password",
#   roles: [ { role: "readWrite", db: "your_database_name" } ]
# })
# exit
```

## 4. Установка Go (Golang)

### Метод 1: Установка через официальный архив (рекомендуется)

```bash
# Скачивание последней версии Go
wget https://go.dev/dl/go1.21.5.linux-amd64.tar.gz

# Удаление предыдущей установки (если есть)
sudo rm -rf /usr/local/go

# Распаковка архива
sudo tar -C /usr/local -xzf go1.21.5.linux-amd64.tar.gz

# Добавление Go в PATH
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
echo 'export GOPATH=$HOME/go' >> ~/.bashrc
echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.bashrc

# Обновление текущей сессии
source ~/.bashrc

# Проверка установки
go version
```

### Метод 2: Установка через snap (альтернатива)

```bash
# Установка Go через snap
sudo snap install go --classic

# Проверка версии
go version
```

## 5. Установка дополнительных инструментов

### Git (если не установлен)

```bash
sudo apt install git -y
git --version
```

### Curl и Wget (если не установлены)

```bash
sudo apt install curl wget -y
```

### Build tools

```bash
sudo apt install build-essential -y
```

## 6. Проверка установки всех компонентов

Выполните следующие команды для проверки:

```bash
echo "=== Проверка Python3 ==="
python3 --version
pip3 --version

echo "=== Проверка Node.js и PM2 ==="
node --version
npm --version
pm2 --version

echo "=== Проверка MongoDB ==="
mongosh --version
sudo systemctl status mongod --no-pager -l

echo "=== Проверка Go ==="
go version
```

## 7. Полезные команды для управления сервисами

### PM2 команды

```bash
# Запуск приложения
pm2 start app.js --name "my-app"

# Просмотр статуса
pm2 status

# Просмотр логов
pm2 logs

# Остановка приложения
pm2 stop my-app

# Перезапуск приложения
pm2 restart my-app

# Удаление приложения из PM2
pm2 delete my-app
```

### MongoDB команды

```bash
# Запуск MongoDB
sudo systemctl start mongod

# Остановка MongoDB
sudo systemctl stop mongod

# Перезапуск MongoDB
sudo systemctl restart mongod

# Проверка статуса
sudo systemctl status mongod

# Просмотр логов
sudo journalctl -u mongod
```

### Go команды

```bash
# Сборка проекта
go build

# Запуск проекта
go run main.go

# Установка зависимостей
go mod tidy

# Инициализация модуля
go mod init project-name
```

## 8. Конфигурация firewall (если необходимо)

```bash
# Разрешение портов для MongoDB (27017)
sudo ufw allow 27017

# Разрешение портов для веб-приложений
sudo ufw allow 3000
sudo ufw allow 8080

# Проверка статуса firewall
sudo ufw status
```

## 9. Решение возможных проблем

### Проблема с правами доступа для MongoDB

```bash
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
sudo systemctl restart mongod
```

### Проблема с Node.js версией

```bash
# Установка Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# Установка последней LTS версии Node.js
nvm install --lts
nvm use --lts
```

### Проблема с Go PATH

```bash
# Проверка переменных окружения
echo $GOPATH
echo $GOROOT
echo $PATH

# Если переменные не установлены, добавьте их в ~/.bashrc
echo 'export GOROOT=/usr/local/go' >> ~/.bashrc
echo 'export GOPATH=$HOME/go' >> ~/.bashrc
echo 'export PATH=$PATH:$GOROOT/bin:$GOPATH/bin' >> ~/.bashrc
source ~/.bashrc
```

## Готово!

Теперь у вас установлены все необходимые компоненты:
- ✅ Python3 с pip
- ✅ Node.js и PM2
- ✅ MongoDB
- ✅ Go (Golang)

Вы можете приступать к разработке и запуску вашего проекта! 