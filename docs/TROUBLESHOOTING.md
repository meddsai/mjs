# Troubleshooting Guide

Welcome to the MJS troubleshooting guide! This document helps you solve common issues you might encounter during development. Remember: encountering issues is normal and part of the development process!

## Table of Contents
- [First-Time Setup Issues](#first-time-setup-issues)
- [Docker Issues](#docker-issues)
- [Frontend Issues](#frontend-issues)
- [Backend Issues](#backend-issues)
- [AI Service Issues](#ai-service-issues)
- [Git and Version Control Issues](#git-and-version-control-issues)
- [Performance Issues](#performance-issues)

## First-Time Setup Issues

### Long Build Times
**Problem**: First build takes longer than expected (>45 minutes)
**Solution**:
1. Check your internet connection
2. Try using a different package mirror:
   ```bash
   # For npm (frontend)
   npm config set registry https://registry.npmmirror.com/

   # For cargo (backend)
   # Add to ~/.cargo/config.toml
   [source.crates-io]
   replace-with = 'tuna'
   [source.tuna]
   registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"

   # For Python (AI service)
   pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
   ```

### Missing Dependencies
**Problem**: "Command not found" or similar errors
**Solution**:
```bash
# Check if basic tools are installed
which git docker node cargo python3

# Install missing tools (Ubuntu/Debian)
sudo apt update
sudo apt install git docker.io nodejs npm python3 python3-pip

# Install missing tools (macOS)
brew install git docker node python3
```

## Docker Issues

### Docker Build Fails
**Problem**: `docker buildx build` fails
**Solution**:
1. Install buildx plugin:
   ```bash
   mkdir -p ~/.docker/cli-plugins/
   curl -SL https://github.com/docker/buildx/releases/download/v0.11.2/buildx-v0.11.2.linux-amd64 -o ~/.docker/cli-plugins/docker-buildx
   chmod +x ~/.docker/cli-plugins/docker-buildx
   ```
2. Clear Docker cache:
   ```bash
   docker system prune -a
   ```

### Container Won't Start
**Problem**: Container fails to start or exits immediately
**Solution**:
1. Check logs:
   ```bash
   docker logs <container_id>
   ```
2. Verify ports aren't in use:
   ```bash
   sudo lsof -i :8000
   sudo lsof -i :8001
   sudo lsof -i :5173
   ```

## Frontend Issues

### npm Install Fails
**Problem**: `npm install` errors or hangs
**Solution**:
1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```
2. Delete node_modules:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Hot Reload Not Working
**Problem**: Changes not reflecting in browser
**Solution**:
1. Check Vite server:
   ```bash
   # Kill existing process
   sudo lsof -i :5173
   kill -9 <PID>

   # Restart server
   npm run dev
   ```
2. Clear browser cache (Ctrl+Shift+R)

## Backend Issues

### Cargo Build Fails
**Problem**: `cargo build` errors
**Solution**:
1. Update Rust:
   ```bash
   rustup update
   ```
2. Clean build:
   ```bash
   cargo clean
   cargo build
   ```

### Database Connection Issues
**Problem**: "Connection refused" or similar
**Solution**:
1. Check if PostgreSQL is running:
   ```bash
   docker ps | grep postgres
   ```
2. Verify connection string in `.env`

## AI Service Issues

### Poetry Install Fails
**Problem**: `poetry install` timeout or errors
**Solution**:
1. Increase timeout:
   ```bash
   export POETRY_HTTP_TIMEOUT=300
   ```
2. Use system Python packages:
   ```bash
   poetry config virtualenvs.create false
   poetry install
   ```

### Model Loading Issues
**Problem**: Model fails to load or out of memory
**Solution**:
1. Check available memory:
   ```bash
   free -h
   ```
2. Use smaller model variant in config

## Git and Version Control Issues

### Pre-commit Hooks Fail
**Problem**: Commit blocked by hooks
**Solution**:
1. Run format tools:
   ```bash
   # Frontend
   npm run format

   # Backend
   cargo fmt

   # AI Service
   black .
   isort .
   ```
2. Check specific errors:
   ```bash
   pre-commit run --all-files
   ```

### Push Rejected
**Problem**: `git push` fails
**Solution**:
1. Pull latest changes:
   ```bash
   git pull origin main
   ```
2. Resolve conflicts if any
3. Try push again

## Performance Issues

### Slow Development Server
**Problem**: Development environment running slowly
**Solution**:
1. Check resource usage:
   ```bash
   htop  # or
   docker stats
   ```
2. Reduce Docker resource limits:
   ```bash
   # Edit Docker Desktop settings
   # Recommended: 4 CPUs, 8GB RAM minimum
   ```

### Memory Issues
**Problem**: Out of memory errors
**Solution**:
1. Check memory usage:
   ```bash
   free -h
   ```
2. Clear system cache:
   ```bash
   sudo sh -c 'echo 3 > /proc/sys/vm/drop_caches'
   ```

## Still Having Issues?

1. **Search Issues**: Check if others had similar problems in our GitHub issues
2. **Ask for Help**:
   - Create a new issue with detailed information
   - Join our Discord community
   - Include:
     - Error messages
     - Steps to reproduce
     - Your environment (OS, versions)
     - Logs if available

## Contributing to This Guide

Found a solution to a common problem? Please help others by:
1. Creating a pull request to update this guide
2. Sharing your solution in our Discord
3. Adding it to our GitHub wiki

Remember: The best way to learn is by solving problems, and every developer faces issues. Don't get discouraged!
