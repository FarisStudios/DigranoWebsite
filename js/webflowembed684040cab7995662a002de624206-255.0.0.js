document.querySelectorAll('#mapsId').forEach((el) => el.remove());
            var s=document.createElement('script');s.type='text/javascript'; s.async=true;
            s.id = 'mapsId';
            s.src='https://maps.bestfreecdn.com/storage/js/maps-4206.js?ver=255';
            document.body.appendChild(s);