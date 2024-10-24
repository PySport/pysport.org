import content from './content.json'
import contentNL from './content_nl.json'
import {useLocation, useMatch, useOutlet, useParams} from "react-router-dom";
import {PageNotFound} from "./PageNotFound";
import {useTranslation} from "react-i18next";

export const BasicPage = () => {

    const {i18n} = useTranslation();

    let {slug} = useParams()
    let _content_translation = [...contentNL,...content]
    let _content = _content_translation.filter(c=>c.type=='basic').find(c => c.slug === '/pages/'+slug);
    if(!_content){
        return <PageNotFound/>
    }
    return (<div className="main__content" style={{marginTop: '1rem'}}>
        <div className="container pb-4">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className={'text-content'} dangerouslySetInnerHTML={{__html: _content.body}}/>
                </div>
            </div>
        </div>
    </div>)

}