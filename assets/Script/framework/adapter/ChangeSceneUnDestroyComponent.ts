
const {ccclass, property} = cc._decorator;

@ccclass
export default class ChangeSceneUnDestroyComponent extends cc.Component {

    @property
    _isDestroy: boolean = false;

    @property
    get isDestroy() {
        return this._isDestroy
    }

    set isDestroy(e){
        e != this._isDestroy && (this._isDestroy = e, this.uddateView())
    }

    onLoad() {
        this.uddateView()
    }
    onDestroy() 
    {
        this._isDestroy = !1;
        this.uddateView()
    }

    uddateView() 
    {
        cc.game.addPersistRootNode(this.node);
        // if (this.node.__gdk__persistNode__ = !this.isDestroy, this.isDestroy) this.node._persistNode && cc.game.removePersistRootNode(this.node);
        // else if (!this.node._persistNode) {
        //     var e = cc.director._scene;
        //     this.node.parent == e && (cc.game.addPersistRootNode(this.node), null == this.node.__gdk___onHierarchyChanged && (this.node.__gdk___onHierarchyChanged = this.node._onHierarchyChanged), this.node._onHierarchyChanged = this._onHierarchyChanged)
        // }
    }
    _onHierarchyChanged(e) 
    {
        //this._persistNode || this.__gdk___onHierarchyChanged(e)
    }
}
