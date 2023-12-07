import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import PageTitle from "../../../layouts/PageTitle";

class CkEditor extends Component {
    render() {
        return (
            <>
                <PageTitle activeMenu="Pickers" motherMenu="Form" pageContent="Pickers" />
                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Form CkEditor</h4>
                            </div>
                            <div class="card-body custom-ekeditor">
                                {/* <h2>Using CKEditor 5 build in React</h2> */}
                                <CKEditor
                                    editor={ ClassicEditor }
                                // data="<p>Hello from CKEditor 5!</p>"
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                            </div>
                        </div>
                    </div>        
                </div>        
            </>
        );
    }
}

export default CkEditor;