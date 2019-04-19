# -*- coding: utf-8 -*-
"""
Created on Fri Apr 19 16:48:05 2019

@author: mcont
"""

import numpy as np 
import matplotlib.pyplot as plt
from scipy.interpolate import interp1d
from matplotlib import rcParams

rcParams['font.family'] = 'sans-serif'
rcParams['font.sans-serif'] = ['Bahnschrift']
rcParams['font.size'] = 14

red = '#E60000'
blue = '#00428C'

plt.figure(figsize=(10, 5))

#plt.xkcd()

def draw(x, y, label, color):
    x_new = np.linspace(x.min(), x.max(),500)
    f = interp1d(x, y, kind='quadratic')
    y_smooth=f(x_new)
    
    plt.plot(x_new, y_smooth, label=label, color=color)

x1 = np.array([0,   50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800])
y1 = np.array([100, 95, 92,  88,  83,  80,  78,  72,  65,  60,  54,  47,  43,  40,  37,  34,  30])

x2 = np.array([0,   50,  100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800])
y2 = np.array([200, 200, 170, 157, 140, 132, 123, 115, 105, 80,  60,  49,  45,  42,  39,  36,  32])
#vf
#y = np.array([200, 200, 170, 157, 140, 132, 123, 115, 105, 83,  65,  55,  50,  45,  43,  40,  38])

# Draw in reverse order so that the legend shows 35b at the top
draw(x2, y2, 'VDSL2 35b', red)
draw(x1, y1, 'VDSL2 17a', blue)

#plt.plot(x, y, label = 'VDSL2 17a orig')
#plt.scatter(x, y)

plt.title('Approssimazione velocità VDSL2 vs distanza', y=1.03)

plt.xticks(np.arange(0, max(x)+1, 50))
plt.yticks(np.arange(0, max(y)+1, 25))

plt.xlabel('Lunghezza del doppino in rame (metri)', labelpad=10)
plt.ylabel('Velocità di download (Mbps)', labelpad=10)

plt.axis([0, 800, 0, 200])
plt.grid(True)

plt.legend(loc='upper right')

#plt.show()
plt.savefig('vdsl.png', dpi=72 * 2)
