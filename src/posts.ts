import EventManager from './event-manager';
import BoxPostForm  from './box-post-form';
import BoxPostList  from './box-post-list'

/**
 * Organização dos scripts em conceitos de páginas
 */
class PostsPage {
    
    constructor(private eventManager: EventManager)
    {
        this.init();
    }

    private init()
    {
        new BoxPostForm(this.eventManager);
        new BoxPostList(this.eventManager);
    }

}

new PostsPage( new EventManager() );