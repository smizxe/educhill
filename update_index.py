# Script to copy vi.html to index.html and translate Vietnamese to English
import re

# Read vi.html
with open('vi.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Translation mappings
translations = {
    'Tính năng': 'Features',
    'Về chúng tôi': 'About Us',
    'Liên hệ': 'Contact',
    'Bắt đầu ngay': 'Get Started',
    'Dạy học <span class="text-indigo-600">Online.</span>': 'Teach <span class="text-indigo-600">online.</span>',
    'Không còn phức tạp.': 'Without the overload.',
    'Tiết kiệm thời gian · Tăng hiệu quả': 'Save time · Increase efficiency',
    'Educhill chuyển đổi tài liệu thành bài học tương tác, tự động chấm điểm và theo dõi tiến độ học sinh — tất cả\\s+trong một hệ thống nhẹ nhàng.': 'Educhill turns documents into interactive lessons, grades automatically, and tracks student progress — all in one calm system.',
    'Dùng thử miễn phí': 'Start Free Trial',
    'Xem Demo': 'Watch Demo',
    'Tiếng Việt': 'Vietnamese',
    '/features': '/',
    '/about-vn': '/about',
    '/contact-vn': '/contact',
    
    # Language switcher - swap flags and labels
    'href="/"': 'href="/features-temp"',  # temp marker
    'href="/features"': 'href="/"',
    'href="/features-temp"': 'href="/features"',
}

# Apply translations
for viet, eng in translations.items():
    if '\\s+' in viet:
        content = re.sub(viet, eng, content)
    else:
        content = content.replace(viet, eng)

# Swap English/Vietnamese labels in language switcher
content = content.replace('alt="English"', 'alt="TEMP_EN"')
content = content.replace('alt="Vietnamese"', 'alt="English"')
content = content.replace('alt="TEMP_EN"', 'alt="Vietnamese"')

# Swap flag images
content = content.replace('gb.png', 'TEMP_GB')
content = content.replace('vn.png', 'gb.png')
content = content.replace('TEMP_GB', 'vn.png')

# Swap the text labels (English/Vietnamese) in the language switcher
# Find and replace the entire language switcher section
old_switcher = '''<!-- English -->
      <a href="/" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors mb-1">
        <div class="w-6 h-4 rounded-sm bg-slate-200 overflow-hidden relative shadow-sm">
          <img src="https://flagcdn.com/w40/gb.png" class="w-full h-full object-cover" alt="English">
        </div>
        <span class="font-medium text-slate-700 text-sm flex-1">English</span>
      </a>
      <!-- Vietnamese (Active) -->
      <a href="/features" class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-100/80 transition-colors">
        <div class="w-6 h-4 rounded-sm bg-slate-200 overflow-hidden relative shadow-sm">
          <img src="https://flagcdn.com/w40/vn.png" class="w-full h-full object-cover" alt="Vietnamese">
        </div>
        <span class="font-medium text-slate-900 text-sm">Vietnamese</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </a>'''

new_switcher = '''<!-- English (Active) -->
      <a href="/" class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-100/80 transition-colors mb-1">
        <div class="w-6 h-4 rounded-sm bg-slate-200 overflow-hidden relative shadow-sm">
          <img src="https://flagcdn.com/w40/gb.png" class="w-full h-full object-cover" alt="English">
        </div>
        <span class="font-medium text-slate-900 text-sm flex-1">English</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </a>
      <!-- Vietnamese -->
      <a href="/features" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
        <div class="w-6 h-4 rounded-sm bg-slate-200 overflow-hidden relative shadow-sm">
          <img src="https://flagcdn.com/w40/vn.png" class="w-full h-full object-cover" alt="Vietnamese">
        </div>
        <span class="font-medium text-slate-700 text-sm">Vietnamese</span>
      </a>'''

content = content.replace(old_switcher, new_switcher)

# Write to index.html
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Successfully updated index.html with English content from vi.html")
