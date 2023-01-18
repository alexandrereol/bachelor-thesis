#!/bin/bash
rm -rf docs/;npm run build; mv dist/ docs/; cp .htaccess docs/.htaccess;
