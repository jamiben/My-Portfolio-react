import React, {useRef, useEffect} from 'react';
import * as dat from 'dat.gui';
import './Canva.scss';
import Header from './Header/Header';
import Profil from './Profil/Profil';

export default function CanvasComponent() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  let width = window.innerWidth;
  let height = window.innerHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
        let settings = {
          lineLength: 50,
          speed: 1,
          lifeTime: 500,
          maxParticles: 80,
          radius: 1,
          avoidVisited: true,
          clearTrails: function() {ctx!.clearRect(0, 0, width, height); visited = [];},
          restart: function() {ctx!.clearRect(0, 0, width, height); particles = []; visited = [];}
        };
        
        let visited:any[] = [];
        
        function onResize() {
          width = canvas!.width = window.innerWidth;
          height = canvas!.height = window.innerHeight;
        }

        function rotate(vec:any, angle:any) {
          // convert the angle from degrees to radians
          angle = angle * Math.PI / 180;
          return [(vec[0] * Math.cos(angle)) - (vec[1] * Math.sin(angle)), (vec[0] * Math.sin(angle)) + (vec[1] * Math.cos(angle))];
        }
        
        
        const dirVecs = [[1, 0],rotate([1, 0], 120),rotate([1, 0], 240)];

        let particles: any[] = [];
      
        function isVisited(x:any, y:any) {
          let pos = [Math.floor(x), Math.floor(y)];
          for(let i = 0; i < visited.length; i++) {
            if(visited[i][0] === pos[0] && visited[i][1] === pos[1]) {
              return true;
            }
          }
          return false;
        }
      
        function addToVisited(x:any, y:any ) {
          if(!isVisited(x, y )) {
            const pos = [Math.floor(x), Math.floor(y)];
            visited.push(pos);
          }
        }
      
        class Particle {
          x: number;
          y: number;
          age: number;
          dir: number[];
          color: string;
        
          constructor() {
            this.x = 0;
            this.y = 0;
            this.age = 0;
            this.dir = dirVecs[Math.floor(Math.random() * 3)];
            this.color = 'hsl(' + ((Date.now() / 100.0) % 360.0) + ',90%, light%)';
          }
        
          updateAndDraw() {
            // your code here
          }
        }
      
      
        Particle.prototype.updateAndDraw = function () {
          this.age += 1;
          if(this.age % settings.lineLength === 0) {
            let dir1 = rotate(this.dir, 60);
            let dir2 = rotate(this.dir, -60);
      
            let options = [];
      
            if(settings.avoidVisited) {
              if(!isVisited(this.x + dir1[0] * settings.lineLength, this.y + dir1[1] * settings.lineLength)) {
                  options.push(dir1);
              }
              if(!isVisited(this.x + dir2[0] * settings.lineLength, this.y + dir2[1] * settings.lineLength)) {
                  options.push(dir2);
              }
              if(options.length === 0) {
                options = [dir1, dir2];
              }
            }else {
              options = [dir1, dir2];
            }
            this.dir = options[Math.floor(Math.random() * options.length)];
            addToVisited(this.x, this.y);
          }
          ctx!.fillStyle = this.color.replace('light', '70');
          ctx!.beginPath();
          ctx!.arc(width/2.0 + this.x, height/2.0 + this.y, settings.radius, 0, 6.3);
      
          ctx!.shadowBlur = settings.radius * 6;
          ctx!.shadowColor = this.color.replace('light', '30');
          ctx!.fill();
        
          this.x += this.dir[0] * settings.speed;
          this.y += this.dir[1] * settings.speed;
        }
      
      
        function updateAndDraw() {
          ctx!.shadowBlur = 0;
          ctx!.globalCompositeOperation = 'source-over';
          
          ctx!.fillStyle = 'rgba(0, 0, 0, 0.03)';
          ctx!.fillRect(0, 0, width, height);
          ctx!.globalCompositeOperation = 'lighter';
          
          for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].updateAndDraw();
            if (particles[i].age > settings.lifeTime) {
              //remove the particle if it is to old
              particles.splice(i, 1);
            }
          }
          if (particles.length < settings.maxParticles) {
            if (Math.random() > 0.9) {
              particles.push(new Particle());
            }
          } else if (particles.length > settings.maxParticles) {
            particles.splice(0, settings.maxParticles);
          }
          requestAnimationFrame(updateAndDraw);
        }
      
        function init() {
          onResize();
          window.onresize = onResize;
          updateAndDraw();
      
          let gui = new dat.GUI();
      
          gui.add(settings, 'lifeTime', 50, 3000);
          gui.add(settings, 'maxParticles', 1, 200);
          gui.add(settings, 'radius', 0.5, 6);
          gui.add(settings, 'avoidVisited');
          gui.add(settings, 'clearTrails');
          gui.add(settings, 'restart');
        }
      
        init();
      }
    }, []);




  return (
    <div className='contentPraticle'>
      <canvas ref={canvasRef} id="canvas" />
      <Header />
      <Profil />
    </div>

  )
}
