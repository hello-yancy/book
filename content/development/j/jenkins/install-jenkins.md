
# Jenkins 的安装和设置

---

## 1. Ubuntu 20.04 安装 Jenkins

This is the Debian package repository of Jenkins to automate installation and upgrade. To use this repository, first add the key to your system: 

```bash
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
```

Then add a Jenkins apt repository entry: 

```bash
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
```

Update your local package index, then finally install Jenkins: 

```bash
sudo apt-get update
sudo apt-get install jenkins
```

## 2. 参考

[1] [Jenkins 的安装和设置](https://www.jenkins.io/zh/download/)  
[2] [Jenkins Debian Packages](https://pkg.jenkins.io/debian-stable/)  
