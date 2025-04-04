FROM rust:1.81-slim-bullseye AS base
WORKDIR /app

FROM base AS development
RUN cargo install cargo-watch
COPY . .
CMD ["cargo", "watch", "-x", "run"]

FROM base AS production
# Install build dependencies first
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    pkg-config \
    libssl-dev \
    ca-certificates \
    build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create a minimal Cargo.toml if it doesn't exist
RUN echo '[package]\nname = "mjs-backend"\nversion = "0.1.0"\n\n[dependencies]\nactix-web = "4.4"\n' > Cargo.toml

# Create a dummy main.rs to build dependencies
RUN mkdir -p src && \
    echo 'fn main() { println!("Hello, world!"); }' > src/main.rs && \
    cargo build --release && \
    rm -rf src

# Copy actual source code
COPY . .

# Build the actual application
RUN cargo build --release

# Use a smaller runtime image
FROM debian:bullseye-slim

WORKDIR /app

# Install runtime dependencies
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    ca-certificates \
    libssl1.1 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy the binary from builder
COPY --from=production /app/target/release/mjs-backend /app/

# Run the binary
CMD ["./mjs-backend"]
