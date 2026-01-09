#!/bin/bash
# Simple push script for Startup Yeti

echo "🚀 Pushing to GitHub..."
git push

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Cloudflare Pages will automatically deploy your changes"
    echo "📍 Check deployment status at: https://dash.cloudflare.com/"
else
    echo "❌ Push failed. Please check your GitHub credentials."
    echo ""
    echo "To fix authentication issues:"
    echo "1. Generate a new Personal Access Token at: https://github.com/settings/tokens"
    echo "2. Run: git config credential.helper store"
    echo "3. Run: git push (it will ask for credentials once, then save them)"
fi
