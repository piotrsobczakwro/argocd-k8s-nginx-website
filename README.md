# ArgoCD K8s Nginx Website

A simple website deployed to Kubernetes using ArgoCD for GitOps continuous delivery.

## Overview

This project demonstrates how to deploy a static website to a Kubernetes cluster using:
- **Nginx** - Web server to serve the static content
- **Docker** - Containerization
- **Kubernetes** - Container orchestration
- **ArgoCD** - GitOps continuous delivery

## Project Structure

```
.
├── website/              # Static website files
│   ├── index.html       # Main HTML file
│   └── style.css        # Stylesheet
├── k8s/                 # Kubernetes manifests
│   ├── configmap.yaml   # ConfigMap with website content
│   ├── deployment.yaml  # Deployment configuration
│   └── service.yaml     # Service configuration
├── argocd/              # ArgoCD configuration
│   └── application.yaml # ArgoCD Application manifest
├── Dockerfile           # Docker image configuration
└── README.md           # This file
```

## Resource Limits

The deployment is configured with resource limits to ensure efficient resource usage:

- **CPU Limit**: 200m (0.2 CPU cores per container)
- **CPU Request**: 100m (0.1 CPU cores guaranteed)
- **Memory Limit**: 128Mi (128 MiB per container)
- **Memory Request**: 64Mi (64 MiB guaranteed)

These limits are suitable for serving a static website with Nginx Alpine, ensuring the application remains performant while limiting resource consumption.

## Deployment Options

### Option 1: Using ArgoCD (Recommended)

1. **Install ArgoCD in your cluster:**
   ```bash
   kubectl create namespace argocd
   kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
   ```

2. **Deploy the ArgoCD Application:**
   ```bash
   kubectl apply -f argocd/application.yaml
   ```

3. **Access ArgoCD UI:**
   ```bash
   kubectl port-forward svc/argocd-server -n argocd 8080:443
   ```
   Then open https://localhost:8080 in your browser.

4. **Get the initial admin password:**
   ```bash
   kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
   ```

### Option 2: Direct Kubernetes Deployment

Deploy the application directly to Kubernetes:

```bash
kubectl apply -f k8s/
```

### Option 3: Using Docker

Build and run locally with Docker:

```bash
# Build the Docker image
docker build -t nginx-website .

# Run the container
docker run -d -p 8080:80 nginx-website
```

Then open http://localhost:8080 in your browser.

## Accessing the Website

After deployment, the service will be available via LoadBalancer. Get the external IP:

```bash
kubectl get service nginx-website
```

If using Minikube:
```bash
minikube service nginx-website
```

## ArgoCD Features

The ArgoCD application is configured with:
- **Automated sync** - Automatically deploys changes from Git
- **Self-healing** - Automatically corrects drift from desired state
- **Auto-pruning** - Removes resources deleted from Git

## Making Changes

1. Update the website content in `k8s/configmap.yaml`
2. Commit and push changes to Git
3. ArgoCD will automatically detect and deploy the changes

## Cleanup

Remove the application:

```bash
# If using ArgoCD
kubectl delete -f argocd/application.yaml

# If deployed directly
kubectl delete -f k8s/
```

## License

See LICENSE file for details.

