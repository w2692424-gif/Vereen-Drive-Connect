# Vercel Deployment Guide for Vereen Drive Connect

## Problem
Your domain `vereendriveconnect.com` is currently pointing to **GitHub Pages** (IP: 185.199.108.153), not Vercel.

## Solution: Complete Deployment Steps

### Step 1: Create/Access Vercel Project
1. Go to https://vercel.com/dashboard
2. Click **"Add New"** → **"Project"**
3. Select **"Import Git Repository"**
4. Find and select `w2692424-gif/Vereen-Drive-Connect`
5. Click **"Import"**

### Step 2: Configure Project Settings
In the Vercel import dialog:
- **Framework**: Should auto-detect or select **"Other"**
- **Root Directory**: Leave as `.` (root)
- **Build Command**: `npm run build`
- **Output Directory**: `.output/public`
- Click **"Deploy"**

Wait for the deployment to complete (usually 2-5 minutes).

### Step 3: Get Vercel's DNS Records
Once deployed:
1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Click **"Add Domain"**
4. Enter: `vereendriveconnect.com`
5. Vercel will show you **DNS records** to add

You'll see something like:
```
Type: CNAME
Name: @ (or your domain root)
Value: cname.vercel.com.
```

Or alternatively:
```
Type: A
Name: @
Value: 76.76.19.165
```

### Step 4: Update DNS at Your Registrar
**IMPORTANT**: Go to your domain registrar (GoDaddy, Namecheap, Route53, Cloudflare, etc.)

**Remove these old GitHub records** (if present):
```
Type: A
Name: @
Value: 185.199.108.153 (GitHub)
```

**Add Vercel's DNS records** provided in Step 3.

### Step 5: Wait for DNS Propagation
DNS changes can take 5-48 hours to fully propagate, but usually takes 15-30 minutes.

Check status:
```bash
nslookup vereendriveconnect.com
```

Should show Vercel's IP (76.76.19.165 or similar), not GitHub's (185.199.108.153).

### Step 6: Verify Deployment
Once DNS updates:
```bash
curl https://vereendriveconnect.com
```

Should return the website HTML, not GitHub's 404 error.

## Troubleshooting

### Still showing GitHub 404?
- DNS hasn't propagated yet - wait and try again
- Check registrar DNS settings were saved correctly
- Try clearing browser cache

### Vercel shows "Domain Pending Verification"?
- Add the DNS records exactly as shown by Vercel
- Wait for DNS to propagate
- Vercel will auto-verify once DNS updates

### Build failing on Vercel?
- Check Vercel deployment logs in dashboard
- Ensure `vercel.json` configuration is correct
- Make sure `npm run build` works locally

## Quick Check
Your domain should resolve to Vercel's servers:
```bash
# Should show 76.76.19.165 or similar (NOT 185.199.108.153)
nslookup vereendriveconnect.com
```

## Need Help?
If still stuck:
1. Verify DNS records at your registrar are correct
2. Wait 30+ minutes for DNS propagation
3. Check Vercel deployment logs for build errors
4. Verify `vercel.json` configuration
