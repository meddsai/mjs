# Pre-commit Guide

This guide explains how to use pre-commit hooks effectively in the Modern Journal Systems project.

## Table of Contents
- [What is Pre-commit?](#what-is-pre-commit)
- [Why Use Pre-commit?](#why-use-pre-commit)
- [Best Practices](#best-practices)
- [Common Workflows](#common-workflows)
- [Troubleshooting](#troubleshooting)

## What is Pre-commit?

Pre-commit is a framework for managing and maintaining multi-language pre-commit hooks. It helps ensure code quality and consistency by running checks before each commit.

## Why Use Pre-commit?

1. **Code Quality**: Ensures consistent code formatting and style
2. **Security**: Prevents committing sensitive information
3. **Efficiency**: Catches issues before they reach the repository
4. **Consistency**: Maintains uniform code style across the team

## Best Practices

### 1. Run Pre-commit Before Committing

Always run pre-commit checks before attempting to commit:

```bash
pre-commit run --all-files
```

This allows you to:
- Review changes before committing
- Fix multiple files at once
- Get clear output about what's being fixed
- Avoid creating additional commits just for pre-commit fixes

### 2. Understanding the Workflow

Here's a demonstration of why running pre-commit first is better:

#### Without Running Pre-commit First:
```bash
# First attempt
git add .
git commit -m "test: demonstrate pre-commit behavior"
# Fails because pre-commit hooks found issues
# Files are modified by hooks
# Need to add and commit again
git add .
git commit -m "test: demonstrate pre-commit behavior"
```

#### With Running Pre-commit First:
```bash
# Run checks first
pre-commit run --all-files
# Review changes
git add .
git commit -m "test: demonstrate pre-commit behavior"
# Single, clean commit
```

### 3. Common Pre-commit Hooks in Our Project

Our project uses several pre-commit hooks:

- **trim trailing whitespace**: Removes trailing whitespace
- **fix end of files**: Ensures files end with a newline
- **check yaml**: Validates YAML files
- **black**: Python code formatter
- **isort**: Python import sorter
- **Rust Format**: Rust code formatter

## Common Workflows

### 1. Regular Development Workflow

```bash
# Make changes to files
# Run pre-commit checks
pre-commit run --all-files
# Review changes
git add .
git commit -m "feat: add new feature"
```

### 2. Fixing Multiple Files

```bash
# Run checks on all files
pre-commit run --all-files
# Review all changes
git add .
git commit -m "style: apply pre-commit fixes"
```

### 3. Skipping Pre-commit (Not Recommended)

In rare cases, you might need to skip pre-commit:

```bash
git commit -m "feat: urgent fix" --no-verify
```

⚠️ Only use this when absolutely necessary and document why you skipped the checks.

## Troubleshooting

### 1. Pre-commit Fails During Commit

If pre-commit fails during a commit:
1. The hooks will attempt to fix issues
2. You'll need to add the fixed files
3. Commit again

### 2. Specific Hook Failing

To run a specific hook:
```bash
pre-commit run <hook-id> --all-files
```

For example:
```bash
pre-commit run black --all-files
```

### 3. Updating Pre-commit Hooks

To update all hooks to their latest versions:
```bash
pre-commit autoupdate
```

## Additional Resources

- [Pre-commit Official Documentation](https://pre-commit.com/)
- [Git Hooks Documentation](https://git-scm.com/docs/githooks)
- [Project's .pre-commit-config.yaml](../.pre-commit-config.yaml)
