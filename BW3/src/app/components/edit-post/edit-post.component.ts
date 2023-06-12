import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  constructor(private postSrv: PostServiceService) { }

  newPost!:Post
  postsArray: Post[] = [];

  ngOnInit(): void {
    this.newPost = {
      title: '',
      body: '',
  };
  }

  updatePosts(post: Post, postId?: number) {
    this.postSrv.updatePost(post, postId).subscribe(
      (response) => {
        console.log('Post aggiornato:', response);
      },
      (error) => {
        console.error('Errore durante l\'aggiornamento del post:', error);
      }
    );
  }

}


